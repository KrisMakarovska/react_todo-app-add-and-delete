import classnames from 'classnames';
import { useState } from 'react';
import { Todo } from './types/Todo';

type Props = {
  todo: Todo,
  onDelete: (id: number) => void,
};

export const TodoInfo: React.FC<Props> = ({
  todo,
  onDelete,
}) => {
  const { id, title, completed } = todo;

  const [isBeingDeleted, setIsBeingDeleted] = useState(false);

  return (
    <div
      className={classnames(
        'todo',
        { completed },
      )}
    >
      <label className="todo__status-label">
        <input
          type="checkbox"
          className="todo__status"
          defaultChecked={completed}
        />
      </label>

      <span className="todo__title">{title}</span>

      <button
        type="button"
        className="todo__remove"
        onClick={() => {
          onDelete(id);
          setIsBeingDeleted(true);
        }}
      >
        ×
      </button>

      <div className={classnames(
        'modal overlay',
        { 'is-active': isBeingDeleted },
      )}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};