export default function footer() {
    return (
        <>
            <footer className="footer footer-center bg-base-300 text-base-content p-4 fixed inset-x-0 bottom-0">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </>
    )
}