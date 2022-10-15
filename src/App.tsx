import "./styles/global.css";
import { Logo } from "./components/Logo";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Envelope, EnvelopeSimple, Lock } from "phosphor-react";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";
import { SignIn } from "./pages/Signin";

export function App() {
  return <SignIn />;
}
