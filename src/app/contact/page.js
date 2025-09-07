import TopBar from "@/app/ui/components/topBar/TopBar";
import BottomBar from "@/app/ui/components/bottomBar/BottomBar";
import ContactForm from "@/app/ui/components/contactForm/ContactForm";

const Contact = () => {
    return (
        <>
            <TopBar/>
            <main>
                <ContactForm/>
            </main>
            <BottomBar/>
        </>
    )
}

export default Contact;
