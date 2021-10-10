import styles from "./styles.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useModal } from "../../context/ModalContext";
import { FormEvent, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  image: string;
  stars: number;
};

interface ModalProps {
  title: string;
  type: string;
  user: User;
}

export function Modal({ title, type, user }: ModalProps) {
  const { closeModal } = useModal();
  const [name, setName] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // FAZER IF E CASO O TYPE SEJA EDITAR EDITE O USUÁRIO

    // CASO NÃO SEJA ADICIONE O USUÁRIO
  }

  return (
    <div className={styles.containerModal}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <AiOutlineCloseCircle
          className={styles.closeButton}
          onClick={closeModal}
        />

        <h2>{title}</h2>

        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>
    </div>
  );
}
