import React from "react";
import { useForm } from "react-hook-form";

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", {
          required: "El nombre es obligatorio",
          minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" },
          maxLength: {
            value: 8,
            message: "El nombre no puede tener más de 8 caracteres",
          },
        })}
        placeholder="Nombre"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}
