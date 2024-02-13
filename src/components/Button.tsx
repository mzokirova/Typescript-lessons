type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
    onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void,
}
export const Button = ({handleClick,onKeyDown}:ButtonProps) => {
    
    return (
        <button onClick={(event)=>handleClick(event,1)} onKeyDown={onKeyDown}>Click</button>
    )
}