function Footer() {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer>
            <p>&copy;{year} Austin Soo.</p>
        </footer>
    );
}

export default Footer;
