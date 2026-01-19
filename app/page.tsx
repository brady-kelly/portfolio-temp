import { Card, CardContent } from "@/components/ui/card"
import { cvSections } from "@/data/sections";
import { utilLog } from "@/lib/logging/console";
import { getBasics } from "@/lib/resume/basics/actions";
import Link from "next/link";

export default async function HomePage() {
  const sections = cvSections;
  const res = await getBasics("data/jsonResume.json");
  if (!res.success) {
    utilLog(res.error, undefined);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-7xl px-4 sm:px-1 lg:px-2 pt-10 pb-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-6 text-balance">
              Professional Portfolio
            </h1>
            <p className="text-sm md:text-sm text-slate-600 mb-8 max-w-3xl mx-auto text-pretty">
              Explore my professional journey, skills, and achievements through an organized presentation of my career
              highlights.
            </p>
            <p><em>(Please note that this site is still under construction and lacks several features. I will have them added as soon as possible.)</em></p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                View Full CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 px-8 bg-white"
              >
                Contact Me
              </Button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
    </div>
  )
}
