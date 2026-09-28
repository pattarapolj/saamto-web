export default function Copyright({ light = false }: { light?: boolean }) {
    return (
        <small className={`copyright ${light ? "copyright--light" : ""}`}>
            © {new Date().getFullYear()} SAAMTO+ All rights reserved
        </small>
    );
}
