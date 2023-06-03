export const ScheduleForm = () => (
    <form id="presupuesto" className="formulario">
        <h2>Agenda una visita para evaluar presupuesto</h2>
        <div className="campo">
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" required />
        </div>
        <div className="campo">
            <label htmlFor="hora">Hora:</label>
            <input type="time" id="hora" name="hora" required />
        </div>
        <div className="campo">
            <label htmlFor="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion"
                placeholder="Escribe la dirección donde quieres pintar" required />
        </div>
        <button type="submit">Agendar</button>
    </form>
);