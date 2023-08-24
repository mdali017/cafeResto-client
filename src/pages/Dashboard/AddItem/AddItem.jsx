import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        // console.log(imgResponse);
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgUrl,
          };
          console.log(newItem);

          // token send to backend
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Item Added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  console.log(image_hosting_token, 13);

  return (
    <div className="border w-full px-10">
      <Helmet>
        <title>CafeResto | Add Item</title>
      </Helmet>
      <SectionTitle subTitle="What's New" title="Add an Item"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-6">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 30 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex gap-9 mb-6">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Desserts</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control w-1/2 my-6">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Details"
          ></textarea>
        </div>
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
