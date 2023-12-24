import { server_calls } from "../api/server";
import Input from "./Input"
import { useForm } from "react-hook-form";
import { useDispatch, useStore } from "react-redux";
import { chooseName, chooseVariety, chooseYear, choosePrice } from "../redux/slices/RootSlice";

interface WhiskeyFormProps {
    id: string[];
}

const WhiskeyForm = (props: WhiskeyFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch()
  const store = useStore()

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id[0]}`);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(`Updated: ${ data } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 2000)
      event.target.reset()
    } else {
      dispatch(chooseName(data.name))
      dispatch(chooseYear(data.year))
      dispatch(chooseVariety(data.variety))
      dispatch(choosePrice(data.price))

      server_calls.create(store.getState())
      console.log((`created: ${data.name}`));
      
      setTimeout(() => {window.location.reload()}, 2000)
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <Input {...register('name')} name='name' placeholder="Name" />
            </div>
            <div>
                <label htmlFor="year">Year</label>
                <Input {...register('year')} name='year' placeholder="Year" />
            </div>
            <div>
                <label htmlFor="variety">Variety</label>
                <Input {...register('variety')} name='variety' placeholder="Variety" />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <Input {...register('price')} name='price' placeholder="Price" />
            </div>
            <div className="flex p-1">
              <button 
              className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                Submit
              </button>
            </div>
        </form>
    </div>
  )
}

export default WhiskeyForm
