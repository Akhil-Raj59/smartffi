import { Shield, Clock, Briefcase } from "lucide-react";

interface CorporateConsultationProps {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const CorporateConsultation = ({
  formData,
  handleInputChange,
  handleSubmit,
}: CorporateConsultationProps) => {
  return (
    <section className="bg-gray-900 text-white py-16 sm:py-24" id="consultation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Request a Corporate Consultation
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Schedule a free consultation with our enterprise team to discuss
              your training needs and get a customized proposal.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/10">
                  <Shield className="h-6 w-6 text-[var(--brand-orange)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Enterprise Security</h3>
                  <p className="text-gray-300 text-sm">
                    Your data is secure with enterprise-grade protection
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/10">
                  <Clock className="h-6 w-6 text-[var(--brand-orange)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quick Response</h3>
                  <p className="text-gray-300 text-sm">
                    Our team responds within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/10">
                  <Briefcase className="h-6 w-6 text-[var(--brand-orange)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Custom Solutions</h3>
                  <p className="text-gray-300 text-sm">
                    Training programs tailored to your business goals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                    placeholder="Your company"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) =>
                      handleInputChange("contactName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    Company Size *
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) =>
                      handleInputChange("companySize", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                    required
                  >
                    <option value="">Select size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    Industry *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) =>
                      handleInputChange("industry", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                    required
                  >
                    <option value="">Select industry</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm">
                  Tell us about your training needs
                </label>
                <textarea
                  value={formData.trainingNeeds}
                  onChange={(e) =>
                    handleInputChange("trainingNeeds", e.target.value)
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                  placeholder="What goals are you looking to achieve?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-xl transition-all font-semibold"
              >
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
