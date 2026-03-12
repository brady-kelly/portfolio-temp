import { DownloadCV } from "../download-cv";

export function Makeover() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Title */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Work Experience is getting a makeover!
                </h1>
                <p>I'm currently performing some updates to this section to improve usability and styling.</p>
                <h2 className="mt-2 font-semibold">Estimated Restoration Time</h2>
                <p>Friday, 13 March 2026</p>
                <h2 className="my-5 font-extrabold">
                    To view work experience, please download my CV.
                </h2>
                <DownloadCV />
            </div>
        </div>
    );
}