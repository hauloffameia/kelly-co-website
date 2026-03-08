import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-background/50 backdrop-blur-sm mt-auto">
            <div className="container mx-auto px-4 py-12 md:py-16 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-border bg-white flex items-center justify-center p-0.5">
                                <Image src="/logo.png" alt="Kelly & Co Logo" width={32} height={32} className="object-contain w-full h-full" unoptimized />
                            </div>
                            <span className="inline-block font-bold text-lg tracking-tight">
                                Kelly & Co Property Services
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground w-full max-w-xs">
                            Professional mowing, landscaping, and property maintenance services. We keep your outdoor spaces looking perfect year-round.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <Link href="https://facebook.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#services" className="hover:text-primary transition-colors">Lawn Mowing</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Landscaping</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Cleanups</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Snow Removal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#gallery" className="hover:text-primary transition-colors">Project Gallery</Link></li>
                            <li><Link href="#reviews" className="hover:text-primary transition-colors">Testimonials</Link></li>
                            <li><Link href="#get-started" className="hover:text-primary transition-colors">Get a Quote</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="tel:555-0123" className="hover:text-primary transition-colors">(555) 555-0123</a></li>
                            <li><a href="mailto:info@kellyandco.com" className="hover:text-primary transition-colors">info@kellyandco.com</a></li>
                            <li><span className="hover:text-primary transition-colors">Service Area: Cedar Valley, Iowa</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Kelly & Co Property Services. All rights reserved.</p>
                    <p>Fully Licensed & Insured.</p>
                </div>
            </div>
        </footer>
    )
}
