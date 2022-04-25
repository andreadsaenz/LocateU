import Image from 'next/image';
import Link from 'next/link';

function About() {
    const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
    const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
    const desc = `text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
    const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
    return (
        <div id='about' className='about-area md:pt-[150px] pt-[50px]'>
            <div className='container max-lg:max-w-full fixed-lg:pr-0'>
                <div className='lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse'>
                    <div className='about-content max-md:pt-10'>
                        <span className={subTitle}>Acerca de</span>
                        <h2 className={title}>
                            LocateU

                        </h2>
                        <h3 className='text-secondary text-2xl mb-12'>
                            Sistema de ayuda de navegación <br />  peatonal dentro de instalaciones<br />  universitarias.
                        </h3>
                        <p className={desc}>
                            Este sistema ayuda al estudiante para su fácil navegación
                            dentro de las instalaciones universitarias. La idea principal
                            es mostrar por medio de una aplicación web, con acceso desde
                            cualquier dispositivo con conexión a internet;
                            la geolocalización del estudiante e indicar la ruta
                            hacía el edificio donde se encuentra el salón u oficina
                            que fueron identificados por medio de una serie de preguntas
                            realizadas en la aplicación.
                        </p>
                    </div>
                    <div className={aboutImage}>
                        <Image
                            src='/images/about/1.gif'
                            layout='fill'
                            objectFit='cover'
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
