import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-3xl font-bold text-[#071B4D]">
          Contact Information
        </h2>

        <p className="mt-3 text-slate-600">
          Reach out to our sourcing specialists for
          electronic components, PCB services,
          prototype requirements and supply chain support.
        </p>
      </div>

      {/* Company */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-xl font-bold text-[#071B4D]">
          LENX TECH ENTERPRISE
        </h3>

        <p className="mt-2 text-slate-600">
          Electronic Components Distribution &
          PCB Solutions
        </p>
      </div>

      {/* Email */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-blue-50 p-3">
            <Mail
              size={22}
              className="text-[#0066FF]"
            />
          </div>

          <div>
            <h4 className="font-semibold text-[#071B4D]">
              Email
            </h4>

            <p className="mt-1 text-slate-600">
              info@lenxtechenterprise.com
            </p>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-orange-50 p-3">
            <Phone
              size={22}
              className="text-[#FF6B00]"
            />
          </div>

          <div>
            <h4 className="font-semibold text-[#071B4D]">
              Contact Number
            </h4>

            <p className="mt-1 text-slate-600">
              +91 96400 74074
            </p>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-blue-50 p-3">
            <MapPin
              size={22}
              className="text-[#0066FF]"
            />
          </div>

          <div>
            <h4 className="font-semibold text-[#071B4D]">
              Location
            </h4>

            <p className="mt-1 text-slate-600">
             #2104, NSL east county, near Uppal cricket stadium, Uppal,
             <br/>
             Hyderabad , Telangana-500039
            </p>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-orange-50 p-3">
            <Clock
              size={22}
              className="text-[#FF6B00]"
            />
          </div>

          <div>
            <h4 className="font-semibold text-[#071B4D]">
              Business Hours
            </h4>

            <p className="mt-1 text-slate-600">
              Monday - Saturday
            </p>

            <p className="text-slate-600">
              09:00 AM - 06:00 PM
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}