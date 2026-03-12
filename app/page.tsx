import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { cvSections } from "@/data/sections";
import { ContactMe } from "@/components/contact/contact-me";
import { PageHeading } from "@/components/shared/page-heading";

export default function HomePage() {
  const sections = cvSections;
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-7xl px-4 sm:px-1 lg:px-2 pt-10 pb-8">
          <div className="text-center">
            <PageHeading text="Brady Kelly - Senior Software Engineer" />
            <div className="w-3xl mx-auto mb-3.5 text-white">
              <p>I offer quality software development and related services at reasonable rates.</p>
              <p>25 years experience in this field help me deliver quality solutions with personal care and attention.</p>
              <p>Websites are my speciality, but I also do desktop applications, and I am open to discussing any other requirements.</p>
            </div>
            {/* <p className="text-slate-600"><em>(Please note that this site may be under construction and lacks several features. I will have them added as soon as possible.)</em></p> */}
            <div className="mt-3"><ContactMe /></div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-sm md:text-sm text-slate-600 mb-8 max-w-3xl mx-auto text-pretty">
          Explore my professional journey, skills, and achievements through an organized presentation of my career
          highlights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <Link key={section.href} href={section.href}>
                <Card
                  className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-slate-200 ${section.color}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{section.title}</h3>
                        <p className="text-slate-600 text-pretty">{section.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div >
  )
}
