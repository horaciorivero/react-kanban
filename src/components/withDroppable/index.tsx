import { Droppable } from 'react-beautiful-dnd'
import type { DroppableProps } from 'react-beautiful-dnd'

export default (Component: React.ElementType) => ({ children, ...droppableProps }: DroppableProps) => {
  return (
    <Droppable {...droppableProps}>
      {(provided) => (
        <Component ref={provided.innerRef} {...provided.droppableProps}>
          {children}
          {provided.placeholder}
        </Component>
      )}
    </Droppable>
  )
}

