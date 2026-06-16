import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";

export default function Footer() {
    return (
        <footer className="bg-[#071B4D] text-white">
            <Container>
                <div className="grid gap-12 py-20 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">

                    {/* Company */}
                    <div>
                        <div className="flex items-center gap-4">
                            <Image
                                src="/logo.png"
                                alt="Lenx Tech Enterprise"
                                width={60}
                                height={60}
                            />

                            <div>
                                <h3 className="text-xl font-bold">
                                    LENX TECH
                                </h3>

                                <p className="text-xs tracking-[4px] text-[#FF6B00]">
                                    ENTERPRISE
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 max-w-sm text-slate-300">
                            Global sourcing partner for electronic
                            components, PCB solutions, prototype validation,
                            and hard-to-find semiconductor procurement.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-5 text-lg font-semibold">
                            Quick Links
                        </h4>

                        <ul className="space-y-3 text-slate-300">
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/about">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link href="/products">
                                    Products
                                </Link>
                            </li>

                            <li>
                                <Link href="/pcb">
                                    PCB Services
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="flex gap-6">
                                <Link href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-and-conditions">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h4 className="mb-5 text-lg font-semibold">
                            Industries
                        </h4>

                        <ul className="space-y-3 text-slate-300">
                            <li>
                                <Link href="/applications/medical-healthcare">
                                    Medical & Healthcare
                                </Link>
                            </li>

                            <li>
                                <Link href="/applications/automotive-electronics">
                                    Automotive Electronics
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-5 text-lg font-semibold">
                            Services
                        </h4>

                        <ul className="space-y-3 text-slate-300">
                            <li>
                                <Link href="/prototype-validation/hard-to-find-sourcing">
                                    Hard-to-Find Sourcing
                                </Link>
                            </li>

                            <li>
                                <Link href="/prototype-validation/risk-control-quality-assurance">
                                    Quality Assurance
                                </Link>
                            </li>

                            <li>
                                <Link href="/prototype-validation/global-supply-chain-access">
                                    Global Supply Chain
                                </Link>
                            </li>

                            <li>
                                <Link href="/prototype-validation/engineered-alternatives">
                                    Engineered Alternatives
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-5 text-lg font-semibold">
                            Contact
                        </h4>

                        <ul className="space-y-4 text-slate-300">
                            <li>
                                <span className="block text-sm text-slate-400">
                                    Email
                                </span>

                                info@lenxtechenterprise.com
                            </li>

                            <li>
                                <span className="block text-sm text-slate-400">
                                    Phone
                                </span>

                                +91 96400 74074
                            </li>

                            <li>
                                <span className="block text-sm text-slate-400">
                                    Location
                                </span>

                                #2104, NSL east county, near Uppal cricket stadium, Uppal,
                                <br />Hyderabad , Telangana -500039
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 py-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
                        <p>
                            © {new Date().getFullYear()} Lenx Tech Enterprise.
                            All Rights Reserved.
                        </p>

                        <div className="flex gap-6">
                            <Link href="/privacy-policy">
                                Privacy Policy
                            </Link>

                            <Link href="/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}