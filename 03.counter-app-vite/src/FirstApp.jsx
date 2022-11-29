import PropTypes from 'prop-types';

function newMessage() {
    let nombre = 'Arian';
    return (`Hola ${nombre}`);
};

export const FirstApp = ({
    title,
    subTitle=234553,
    name
}) => {
    
    return (
    //este es un nodo padre que agrupa los elementos que continuan. Requerido
    <>
        <h1>{title}</h1>
        <code>{newMessage()}</code>
        <p>{subTitle}</p>
        <p>{name}</p>
    </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
    name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 0,
    name: 'Ari R'
}