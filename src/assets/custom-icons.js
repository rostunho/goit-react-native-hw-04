import Svg, { Path, Circle, G, Rect, Defs, ClipPath } from "react-native-svg";

export function AddPhotoIcon(props) {
  return (
    <Svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12.5} cy={12.5} r={12} fill="#fff" stroke="#FF6C00" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6z"
        fill="#FF6C00"
      />
    </Svg>
  );
}

export function LogOutIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 22H5a2 2 0 01-2-2V4a2 2 0 012-2h5M17 16l4-4-4-4M21 12H9"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function PostsIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#fff" d="M0 0h24v24H0z" />
      <Path
        clipRule="evenodd"
        d="M3 3h7v7H3V3zM14 3h7v7h-7V3zM14 14h7v7h-7v-7zM3 14h7v7H3v-7z"
        stroke={props.focused ? "#FF6C00" : "#212121"}
        strokeOpacity={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CreatePostIcon(props) {
  return (
    <Svg
      width={70}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0_12_109)">
        <Rect width={70} height={40} rx={20} fill={"#FF6C00"} />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.5 13.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_12_109">
          <Path fill="#fff" d="M0 0h70v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function ProfileIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
        stroke={props.focused ? "#FF6C00" : "#212121"}
        strokeOpacity={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M12 11a4 4 0 100-8 4 4 0 000 8z"
        stroke={props.focused ? "#FF6C00" : "#212121"}
        strokeOpacity={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ToBackIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 12H4M10 18l-6-6 6-6"
        stroke="#212121"
        strokeOpacity={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
