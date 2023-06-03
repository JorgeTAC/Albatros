export const ContactForm = () => (
    <form id="contacto" className="formulario">
        <h2>Contacta con nosotros</h2>
        <div className="campo">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" required />
        </div>
        <div className="campo">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Escribe tu email" required />
        </div>
        <div className="campo">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" placeholder="Escribe tu teléfono" required />
        </div>
        <div className="campo">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje" required></textarea>
        </div>
        <button type="submit">Enviar</button>
    </form>
);