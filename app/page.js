'use client'
import Image from "next/image";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "@/components/ChatFeed";


export default function Home() {
  return (
    <ChatEngine
      height="100vh"
			projectID="328ecbc2-6119-4b92-98f7-441764783da0"
			userName='Arjun Naik'
			userSecret='mango'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
  );
}
