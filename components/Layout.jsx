import Link from "next/link";
import estilo from "../styles/Layout.module.css";
import Image from "next/image";

const name = "Topicos Especializados de Programación Web";

export default function Layout({children, title, home}) {
    return (
        <>
            {/* <div className={}> */}
            <div className={estilo.container}>
                <head>
                    <title>{title}</title>
                </head>

                {/* <header className={}> */}
                <header>
                    {
                        home ?(
                            <>
                                <Image
                                    priority
                                    src="/img/1.jpg"
                                    className={estilo.borderCircle}
                                    height={200}
                                    width={200}
                                    alt={name}                   
                                />
                                <h1 className={estilo.nombreusuarioperfil}>{name}</h1>
                            </>
                        ) : (
                            <>
                                <Link href="/">
                                    <a>
                                        <Image
                                            priority
                                            src="/img/1.jpg"
                                            className={estilo.borderCircle}
                                            height={200}
                                            width={200}
                                            alt={name}                   
                                        />
                                    </a>
                                </Link>
                                <h2 className={estilo.headingLg}>
                                    <a className={estilo.colorInherit}>{name}</a>
                                </h2>
                            </>
                        )
                    }
                </header>

                <nav className={estilo.header}>
                    <Link href="/">
                        <a>Inicio</a>
                    </Link>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </nav>

                <main>
                    {children}
                </main>

                <footer>
                    <div className={estilo.backToHome}>
                        <Link href="/">
                            <a >De regreso a casa</a>
                        </Link>
                    </div>
                </footer>
            </div>
        </>
    )
}
