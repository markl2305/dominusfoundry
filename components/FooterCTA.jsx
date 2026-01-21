import Button from './Button'

export default function FooterCTA() {
  return (
    <section className="bg-gradient-to-b from-forge-800 to-forge-900 text-white">
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 text-center space-y-4">
        <h2 className="heading-forge-md text-white">
          Ready to stop duct-taping tools together?
        </h2>
        <Button href="/start" className="justify-center">
          Get Started
        </Button>
      </div>
    </section>
  )
}
