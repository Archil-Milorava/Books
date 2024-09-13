import { Button } from "@/components/ui/button";
import {useNavigate} from "react-router-dom"

export default function BookPage() {
  const IMG =
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1337714526i/34268.jpg";


    const navigate = useNavigate()

  return (
    <div className="w-full h-screen max-h-screen overflow-hidden  flex items-center justify-center">
      <Button className="mr-2" onClick={() => navigate(-1)}>back</Button>
      <div className=" h-[38rem] w-5/6 grid grid-cols-[1fr_2fr] grid-rows-1">
        <div className="">
          <div className="bg-[#FAFAFA] h-4/5 flex items-center justify-center">
            <img src={IMG} alt="helo" className="h-[28rem] shadow-2xl" />
          </div>
        </div>

        <div className="pl-4">
          <div className=" h-20 felx flex-col gap-2">
            <h4 className="text-xl">autor bla</h4>
            <h1 className="text-3xl tracking-wider font-bold">The peter pan</h1>
          </div>
          <p className="mt-4 px-2 text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam,
            vero voluptates voluptate laudantium nesciunt officia, nemo amet rem
            consectetur voluptatum reprehenderit reiciendis labore non quos,
            animi doloribus. Doloremque qui inventore quia temporibus,
            dignissimos explicabo repellendus aliquam architecto! Necessitatibus
            fugit illo similique id rerum eaque, vel quo eligendi, asperiores
            sint ex deleniti suscipit. Repudiandae tenetur nemo et quis nostrum,
            amet adipisci numquam maiores labore ipsum voluptas vitae. Accusamus
            commodi voluptatum tempore fugiat, voluptate porro aspernatur, vero
            nobis architecto cumque veritatis!
          </p>
          <p className="px-2 mt-4 tracking-wide font-light">
            Published: <span className="font-bold">1232</span>
          </p>
          <div className=" w-full flex gap-2 justify-center mt-8">
            <Button className="w-[20rem]" variant={"secondary"}>
              Update
            </Button>
            <Button className="w-[20rem]" variant={"destructive"}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
