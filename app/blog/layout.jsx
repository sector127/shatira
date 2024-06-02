import SectionHead from "@/components/ui/SectionHead";

export default function BlogLayout({ children }) {
    return (
        <div>
            <SectionHead title="Blog" />
            {children}
        </div>
    );
}
