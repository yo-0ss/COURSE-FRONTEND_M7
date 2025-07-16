import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nombre: yup.string().required("El nombre es obligatorio"),
  correo: yup.string().email("Email no válido").required("El correo es obligatorio"),
  edad: yup
    .number()
    .min(18, "Debes ser mayor de edad")
    .required("La edad es obligatoria"),
});

export default function YupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nombre")} placeholder="Nombre" />
      {errors.nombre && <p>{errors.nombre.message}</p>}

      <input {...register("correo")} placeholder="Correo" />
      {errors.correo && <p>{errors.correo.message}</p>}

      <input type="number" {...register("edad")} placeholder="Edad" />
      {errors.edad && <p>{errors.edad.message}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
}
