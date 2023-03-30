function Footer() {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer>
            <p>&copy;{year} Jaden Chun.</p>
        </footer>
    );
}

export default Footer;
