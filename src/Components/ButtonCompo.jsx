import React from 'react'
import {Button, Flex} from "@radix-ui/themes";
const ButtonCompo = (props) => {
  const {title , size, direction, type} = props;
  return (
        <Flex direction={direction} gap="5">
       <Button size={size} type={type}>{title}</Button>
       </Flex>
  )
}

export default ButtonCompo;