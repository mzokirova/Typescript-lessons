import { Button } from "./Button"
import { Input } from "./Input"

<>
<Button handleClick={(event,id) => {
          console.log("Button Clicked",event,id)
        }} onKeyDown={(event)=>console.log('key clicked',event)} />
    <Input value='' handleChange={(event) => console.log(event)} />
</>