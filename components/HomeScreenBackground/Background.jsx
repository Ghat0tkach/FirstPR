import { Underlay} from "./style";
import { Bubbles} from "./bubbles";



export default function Background() {
  return (
    <>
      <Underlay />
      <div className="flex justify-center items-center h-screen">
      <Bubbles/>
      </div>
    </>
  );
}
 