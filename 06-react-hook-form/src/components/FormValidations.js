import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const FormValidations = () => {
  const [inputColor, setInputColor] = useState("#614ad3");

  useEffect(() => {
    let word = watch("prueba");
    if (word === "react") {
      setInputColor("#00ff00");
    }
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // console.log(watch("prueba"));

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  const customSubmit = (data, e) => {
    alert("Validacion Exitosa");
    e.target.reset();
  };

  return (
    <>
      <h2>Form Validations</h2>
      {/* <form onSubmit={handleSubmit(customSubmit)} className="form-react">
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            {...register("name", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.name?.type === "required" && (
            <strong className="fail">El campo no puede estar vacio</strong>
          )}
          {errors.name?.type === "maxLength" && (
            <strong className="fail">
              El campo no puede tener mas de 10 caracteres
            </strong>
          )}
        </div>
        <div className="form-control">
          <label>Age</label>
          <input
            type="number"
            {...register("age", {
              required: true,
              min: 10,
              max: 100,
            })}
          />
          {errors.age?.type === "required" && (
            <strong className="fail">El campo es requerido</strong>
          )}
          {errors.age?.type === "min" && (
            <strong className="fail">
              La edad minima es de 10 a&ntilde;os
            </strong>
          )}
          {errors.age?.type === "max" && (
            <strong className="fail">
              La edad maxima es de 100 a&ntilde;os
            </strong>
          )}
        </div>
        <div className="form-control">
          <label>Country</label>
          <input
            type="text"
            {...register("country", {
              required: {
                value: true,
                message: "Custom Message:Ingrese los datos",
              },
            })}
          />
        </div>
        {errors.country && (
          <strong className="fail">{errors.country.message}</strong>
        )}
        <div className="form-control">
          <input
            {...register("prueba")}
            style={{ backgroundColor: inputColor }}
          />
        </div>
        <button className="" type="submit">
          Send
        </button>
      </form> */}
      <hr />
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("example")} />
        <input {...register("exampleRequired", {required : true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit"/>
      </form> */}
      <hr/>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form> */}
    </>
  );
};

export default FormValidations;
