#!/usr/bin/env python3
"""Generate Dominus Foundry Pre-Discovery Questionnaire PDF."""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether, PageBreak
)
from reportlab.pdfgen import canvas
import os

# Brand colors
NAVY = HexColor("#1F2A33")
GOLD = HexColor("#C9B087")
GOLD_DARK = HexColor("#A98B5A")
CREAM = HexColor("#F4EBDD")
TEXT = HexColor("#111827")
MUTED = HexColor("#6B7280")
LIGHT_BORDER = HexColor("#D1C4A9")
FIELD_BG = HexColor("#FAFAF7")
WHITE = HexColor("#FFFFFF")

OUTPUT_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "public", "Dominus_Pre_Discovery_Questionnaire.pdf"
)

# Styles
style_title = ParagraphStyle(
    "Title", fontName="Times-Bold", fontSize=22, textColor=WHITE,
    alignment=TA_CENTER, spaceAfter=6, leading=26
)
style_subtitle = ParagraphStyle(
    "Subtitle", fontName="Helvetica", fontSize=10, textColor=HexColor("#D4C9B0"),
    alignment=TA_CENTER, spaceAfter=0, leading=14
)
style_section = ParagraphStyle(
    "Section", fontName="Times-Bold", fontSize=14, textColor=NAVY,
    spaceBefore=16, spaceAfter=4, leading=18
)
style_section_desc = ParagraphStyle(
    "SectionDesc", fontName="Helvetica-Oblique", fontSize=8.5, textColor=MUTED,
    spaceAfter=10, leading=12
)
style_label = ParagraphStyle(
    "Label", fontName="Helvetica-Bold", fontSize=9, textColor=TEXT,
    spaceBefore=0, spaceAfter=2, leading=12
)
style_hint = ParagraphStyle(
    "Hint", fontName="Helvetica-Oblique", fontSize=7.5, textColor=MUTED,
    spaceAfter=0, leading=10
)
style_field_prompt = ParagraphStyle(
    "FieldPrompt", fontName="Helvetica-Bold", fontSize=9, textColor=GOLD_DARK,
    spaceBefore=8, spaceAfter=2, leading=12
)
style_footer = ParagraphStyle(
    "Footer", fontName="Helvetica", fontSize=7, textColor=MUTED,
    alignment=TA_CENTER, leading=10
)
style_body = ParagraphStyle(
    "Body", fontName="Helvetica", fontSize=9, textColor=TEXT,
    leading=13, spaceAfter=4
)
style_confidential = ParagraphStyle(
    "Confidential", fontName="Helvetica-Oblique", fontSize=7.5,
    textColor=MUTED, alignment=TA_CENTER, leading=10, spaceBefore=10
)


def make_field_line(width=None):
    """A thin gold underline to act as a fill-in field."""
    return HRFlowable(
        width="100%", thickness=0.5, color=LIGHT_BORDER,
        spaceBefore=1, spaceAfter=6, dash=(2, 2)
    )


def make_field(label_text, hint_text=None, tall=False):
    """Return a list of flowables for a single labelled field."""
    items = []
    items.append(Paragraph(label_text, style_label))
    if hint_text:
        items.append(Paragraph(hint_text, style_hint))
    if tall:
        # Double-height field (two lines)
        items.append(make_field_line())
        items.append(Spacer(1, 4))
        items.append(make_field_line())
    else:
        items.append(make_field_line())
    return items


def make_open_question(question_text):
    """A highlighted open-ended question with multi-line answer space."""
    items = []
    items.append(Paragraph(question_text, style_field_prompt))
    items.append(make_field_line())
    items.append(Spacer(1, 2))
    items.append(make_field_line())
    items.append(Spacer(1, 2))
    items.append(make_field_line())
    return items


def make_checkbox_row(options):
    """Render a row of checkbox options."""
    text = "    ".join([f"<font face='Helvetica' size='9'>&#9633;  {opt}</font>" for opt in options])
    return Paragraph(text, ParagraphStyle(
        "Check", fontName="Helvetica", fontSize=9, textColor=TEXT,
        spaceBefore=2, spaceAfter=6, leading=14
    ))


def section_divider():
    return HRFlowable(
        width="100%", thickness=1, color=GOLD, spaceBefore=12, spaceAfter=6
    )


class FooterCanvas(canvas.Canvas):
    """Custom canvas to add header bar and footer to every page."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.pages = []

    def showPage(self):
        self.pages.append(dict(self.__dict__))
        super().showPage()

    def save(self):
        num_pages = len(self.pages)
        for i, page in enumerate(self.pages):
            self.__dict__.update(page)
            self._draw_footer(i + 1, num_pages)
            super().showPage()
        super().save()

    def _draw_footer(self, page_num, total):
        w, h = letter
        # Footer line
        self.setStrokeColor(LIGHT_BORDER)
        self.setLineWidth(0.5)
        self.line(0.75 * inch, 0.55 * inch, w - 0.75 * inch, 0.55 * inch)
        # Footer text
        self.setFont("Helvetica", 7)
        self.setFillColor(MUTED)
        self.drawCentredString(w / 2, 0.38 * inch,
            "Dominus Foundry  |  (866) 710-3313  |  foundry@dominusfoundry.com  |  dominusfoundry.com")
        self.drawCentredString(w / 2, 0.25 * inch,
            f"Page {page_num} of {total}  |  Confidential")


def build_pdf():
    doc = SimpleDocTemplate(
        OUTPUT_PATH, pagesize=letter,
        leftMargin=0.75 * inch, rightMargin=0.75 * inch,
        topMargin=0.75 * inch, bottomMargin=0.75 * inch
    )
    story = []

    # ── HEADER BANNER ──
    # We'll use a table with background color to simulate a banner
    banner_data = [[
        Paragraph("Dominus Foundry", style_title),
    ]]
    banner_sub = [[
        Paragraph("Pre-Discovery Questionnaire", ParagraphStyle(
            "BannerSub", fontName="Times-Bold", fontSize=13, textColor=GOLD,
            alignment=TA_CENTER, leading=16
        )),
    ]]
    banner_note = [[
        Paragraph(
            "Complete this before your call so we can make the most of our 30 minutes together.",
            style_subtitle
        ),
    ]]

    usable = doc.width
    banner = Table(banner_data, colWidths=[usable], rowHeights=[40])
    banner.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("ROUNDEDCORNERS", [8, 8, 0, 0]),
    ]))
    banner2 = Table(banner_sub, colWidths=[usable], rowHeights=[22])
    banner2.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    banner3 = Table(banner_note, colWidths=[usable], rowHeights=[28])
    banner3.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ("ROUNDEDCORNERS", [0, 0, 8, 8]),
    ]))
    story.append(banner)
    story.append(banner2)
    story.append(banner3)
    story.append(Spacer(1, 16))

    # ── SECTION 1: BUSINESS OVERVIEW ──
    story.append(Paragraph("1. Business Overview", style_section))
    story.append(Paragraph(
        "Help us understand your operation at a glance.",
        style_section_desc
    ))

    # Two-column fields
    half = usable / 2 - 6
    fields_1 = [
        ("Business Name", None), ("Your Name & Role", None),
        ("Industry / Trade", None), ("Years in Operation", None),
        ("Team Size (office + field)", None), ("Number of Locations", None),
    ]
    for i in range(0, len(fields_1), 2):
        left_items = make_field(fields_1[i][0], fields_1[i][1])
        if i + 1 < len(fields_1):
            right_items = make_field(fields_1[i + 1][0], fields_1[i + 1][1])
        else:
            right_items = [Spacer(1, 1)]
        row = Table(
            [[[*left_items], [*right_items]]],
            colWidths=[half, half]
        )
        row.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (0, -1), 0),
            ("RIGHTPADDING", (-1, 0), (-1, -1), 0),
            ("LEFTPADDING", (1, 0), (1, -1), 12),
        ]))
        story.append(row)

    story.extend(make_field("Annual Revenue Range"))
    story.append(make_checkbox_row(["< $500K", "$500K - $1M", "$1M - $5M", "$5M - $15M", "$15M+"]))
    story.extend(make_field("Website URL"))

    story.append(section_divider())

    # ── SECTION 2: CURRENT TECH STACK ──
    story.append(Paragraph("2. Current Tech Stack", style_section))
    story.append(Paragraph(
        "We need to know what you're running so we can integrate cleanly on day one.",
        style_section_desc
    ))

    stack_fields = [
        ("Phone System", "Provider and approximate number of lines"),
        ("CRM", "Name of your CRM, or write 'none'"),
        ("Accounting / Invoicing Software", None),
        ("Scheduling / Dispatch Tool", None),
        ("Email Marketing Platform", None),
        ("Other Software You Rely On Daily", None),
    ]
    for label, hint in stack_fields:
        story.extend(make_field(label, hint))

    story.extend(make_open_question(
        "On a scale of 1-10, how well do your current tools talk to each other?"
    ))

    story.append(section_divider())

    # ── SECTION 3: REVENUE CAPTURE (INTAKE) ──
    story.append(Paragraph("3. Revenue Capture (Intake)", style_section))
    story.append(Paragraph(
        "Every missed call is a missed job. This section helps us calculate what's falling through.",
        style_section_desc
    ))

    story.extend(make_field("How many inbound calls / leads per week?"))
    story.append(Paragraph("What channels do leads come through?", style_label))
    story.append(make_checkbox_row(["Phone", "Web Form", "Social Media", "Referral", "Other"]))
    story.extend(make_field(
        "Estimated % of calls missed or responded to after 5+ minutes",
        "Best guess is fine"
    ))

    for label, hint in [
        ("Average job / deal value", "$"),
        ("Current close rate on qualified leads", "Estimate is fine"),
        ("What happens to a lead that comes in after hours?", None),
    ]:
        story.extend(make_field(label, hint))

    story.extend(make_open_question(
        "What's the most common way you lose a lead today?"
    ))

    story.append(PageBreak())

    # ── SECTION 4: REVENUE COLLECTION ──
    story.append(Paragraph("4. Revenue Collection", style_section))
    story.append(Paragraph(
        "Getting paid shouldn't require a second job. This tells us where cash is stuck.",
        style_section_desc
    ))

    collection_fields = [
        ("How many invoices do you send per month?", None),
        ("Average invoice value", "$"),
        ("What % are paid late (30+ days)?", None),
        ("What % require manual follow-up?", None),
        ("Estimated % of revenue never collected (write-offs)", None),
        ("How many hours per week does someone spend chasing payments?", None),
    ]
    for label, hint in collection_fields:
        story.extend(make_field(label, hint))

    story.extend(make_open_question(
        "What's your biggest frustration with getting paid?"
    ))

    story.append(section_divider())

    # ── SECTION 5: OPERATIONS & OVERHEAD ──
    story.append(Paragraph("5. Operations & Overhead", style_section))
    story.append(Paragraph(
        "Time is the most expensive thing you spend. "
        "Estimate total hours across your team, not per person.",
        style_section_desc
    ))

    ops_fields = [
        "Hours / week spent on scheduling & dispatch",
        "Hours / week spent on estimates & proposals",
        "Hours / week on manual data entry (double-entry, copy-paste between systems)",
        "Hours / week on crew / team coordination",
        "Hours / week on customer follow-up & communication",
    ]
    for label in ops_fields:
        story.extend(make_field(label))

    story.extend(make_open_question(
        "If you could eliminate one daily task from your plate, what would it be?"
    ))

    story.append(section_divider())

    # ── SECTION 6: CUSTOMER EXPERIENCE & REPUTATION ──
    story.append(Paragraph("6. Customer Experience & Reputation", style_section))
    story.append(Paragraph(
        "Reviews and referrals compound over time. This tells us what's working and what's not.",
        style_section_desc
    ))

    cx_fields = [
        ("Current Google review count", None),
        ("Average star rating", None),
        ("Reviews received per month", None),
        ("% of jobs with callbacks or warranty issues", None),
        ("Current referral rate (% of jobs from referrals)", None),
    ]
    for label, hint in cx_fields:
        story.extend(make_field(label, hint))

    story.append(Paragraph("Do you have a formal review request process?", style_label))
    story.append(make_checkbox_row(["Yes", "No"]))
    story.append(Paragraph("Do you have a formal referral program?", style_label))
    story.append(make_checkbox_row(["Yes", "No"]))

    story.append(PageBreak())

    # ── SECTION 7: GOALS & PRIORITIES ──
    story.append(Paragraph("7. Goals & Priorities", style_section))
    story.append(Paragraph(
        "This is the most important section. It tells us what matters to you.",
        style_section_desc
    ))

    story.extend(make_field(
        "What made you reach out to Dominus Foundry?",
        "Or: what caught your attention?",
        tall=True
    ))

    story.append(Spacer(1, 6))
    story.append(Paragraph(
        "Rank these in order of priority (1 = most urgent, 4 = least):",
        style_label
    ))
    priority_data = [
        ["____", "Capture more leads / stop missing calls"],
        ["____", "Get paid faster / reduce AR"],
        ["____", "Reduce manual operations overhead"],
        ["____", "Improve customer experience / reviews"],
    ]
    priority_table = Table(priority_data, colWidths=[0.5 * inch, usable - 0.5 * inch])
    priority_table.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
        ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("TEXTCOLOR", (0, 0), (0, -1), GOLD_DARK),
        ("TEXTCOLOR", (1, 0), (1, -1), TEXT),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("LEFTPADDING", (0, 0), (0, -1), 0),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    story.append(priority_table)
    story.append(Spacer(1, 8))

    story.extend(make_field(
        "What does success look like 90 days from now?", None, tall=True
    ))
    story.extend(make_field(
        "Is there a specific dollar amount you're losing that you'd want to recover?",
        "Annual estimate, best guess"
    ))

    story.append(Paragraph("Timeline: When do you need this operational?", style_label))
    story.append(make_checkbox_row(["ASAP", "30 days", "60 days", "No rush"]))

    story.append(section_divider())

    # ── SECTION 8: DECISION FRAMEWORK ──
    story.append(Paragraph("8. Decision Framework", style_section))
    story.append(Paragraph(
        "Helps us tailor the conversation to everyone involved.",
        style_section_desc
    ))

    story.extend(make_field("Who else is involved in this decision?"))
    story.extend(make_field(
        "Have you evaluated other AI / automation solutions? If so, which?"
    ))
    story.extend(make_field(
        "Budget range you're comfortable with for a one-time build"
    ))

    story.append(Paragraph("Preferred payment structure:", style_label))
    story.append(make_checkbox_row([
        "Pay in Full (10% discount)", "6-Month Plan", "12-Month Plan"
    ]))

    story.extend(make_open_question(
        "Any concerns or dealbreakers we should know about upfront?"
    ))

    story.append(Spacer(1, 20))

    # ── CLOSING ──
    closing_box = Table(
        [[Paragraph(
            "This questionnaire is confidential and used exclusively to prepare "
            "for your discovery call. The more detail you provide, the more specific "
            "and valuable our conversation will be.",
            ParagraphStyle("ClosingBox", fontName="Helvetica-Oblique", fontSize=8,
                           textColor=MUTED, alignment=TA_CENTER, leading=11)
        )]],
        colWidths=[usable]
    )
    closing_box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), HexColor("#F9F6F0")),
        ("ROUNDEDCORNERS", [6, 6, 6, 6]),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ("LEFTPADDING", (0, 0), (-1, -1), 16),
        ("RIGHTPADDING", (0, 0), (-1, -1), 16),
        ("BOX", (0, 0), (-1, -1), 0.5, LIGHT_BORDER),
    ]))
    story.append(closing_box)
    story.append(Spacer(1, 10))

    # Motto
    motto_table = Table(
        [[Paragraph(
            "<i>Fide et Familia</i>",
            ParagraphStyle("Motto", fontName="Times-Italic", fontSize=10,
                           textColor=GOLD_DARK, alignment=TA_CENTER, leading=14)
        )]],
        colWidths=[usable]
    )
    motto_table.setStyle(TableStyle([
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
    ]))
    story.append(motto_table)

    # Build
    doc.build(story, canvasmaker=FooterCanvas)
    print(f"PDF generated: {OUTPUT_PATH}")


if __name__ == "__main__":
    build_pdf()
