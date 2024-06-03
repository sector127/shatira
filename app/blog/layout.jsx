import SectionHead from "@/components/ui/SectionHead";
import {Suspense} from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function BlogLayout({ children }) {
    return (
        <div>
            <Suspense fallback={<LoadingSpinner/>}>
                <SectionHead title="Blog" />
                {children}
            </Suspense>
        </div>
    );
}
