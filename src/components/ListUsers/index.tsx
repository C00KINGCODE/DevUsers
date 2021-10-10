import { useEffect, useState } from "react";
import axios from "axios";

import { AiFillStar } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

import { useModal } from "../../context/ModalContext";
import styles from "./styles.module.scss";
import { useUsers } from "../../context/UsersContext";

export const ListUsers = () => {
  const { openModal } = useModal();
  const { users } = useUsers();

  return (
    <>
      <div className={styles.container}>
        {users.map((user) => (
          <div key={user.id} className={styles.userContainer}>
            <div className={styles.userContent}>
              <img src={user.image} alt="user" />
              <div className={styles.user}>
                <strong>{user.name}</strong>
                <span>
                  {user.stars}
                  <AiFillStar color="#EE6C4D" />
                </span>
              </div>
            </div>

            <div>
              <BsPencil
                className={styles.editIcon}
                onClick={() => openModal("insira as alterações", "edit", user)}
              />
              <RiDeleteBinLine className={styles.editIcon} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
