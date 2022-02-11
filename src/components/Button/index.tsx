
interface ButtonProps {
    handleClick?: Function;
    className?: string;
    name: string;
}

const Button = (props: ButtonProps) => {

    return (
        <button
            className={`button ${props.className}`}
            onClick={event => {
                if(props.handleClick !== undefined){
                    props.handleClick(event)
                    
                }
                
            }}
            >
            {props.name}
        </button>
    )
}

export default Button;