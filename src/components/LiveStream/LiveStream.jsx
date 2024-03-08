import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";

function MeetingView({ isHost, startLivestream }) {
  const [joined, setJoined] = useState(null);
  const { join, participants } = useMeeting({
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
  });

  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="container">
      {joined === "JOINED" ? (
        <div>
          {[...participants.keys()].map((participantId) => (
            <ParticipantView
              key={participantId}
              participantId={participantId}
            />
          ))}
        </div>
      ) : joined === "JOINING" ? (
        <p>Joining the Livestream...</p>
      ) : (
        <>
          {isHost ? (
            <button onClick={startLivestream}>Host Livestream</button>
          ) : (
            <p>No Livestream hosted</p>
          )}
          <button onClick={joinMeeting}>Join Livestream</button>
        </>
      )}
    </div>
  );
}

function ParticipantView(props) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal } = useParticipant(
    props.participantId
  );

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("micRef.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div>
      <audio ref={micRef} autoPlay="autoPlay" playsInline muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          playsinline
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          height={"300px"}
          width={"300px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
}

const Livestream = () => {
  const [isHost, setIsHost] = useState(false);
  const [livestreamHosted, setLivestreamHosted] = useState(false);
  const meetingId = "b9fb-tyyv-cxnu"; // Use the same meetingId for all devices

  const startLivestream = () => {
    // Add logic to start hosting the livestream
    setIsHost(true);
    setLivestreamHosted(true);
  };

  return (
    <MeetingProvider
      config={{
        meetingId: meetingId,
        micEnabled: false,
        webcamEnabled: true,
        name: "BORED TUNNELERS LIVE STREAM",
      }}
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIwOTU2YzY5Zi04NWQzLTQ5OWMtYWRhOS1jOGVkYWE5YTdlN2UiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwOTg5OTI0MywiZXhwIjoxNzA5OTg1NjQzfQ.vResAIq9NFfy6vuTdgeDk1uiYJ3ELPqmhKfihBkShWo"
    >
      {livestreamHosted ? (
        <MeetingView isHost={false} />
      ) : (
        <MeetingView isHost={isHost} startLivestream={startLivestream} />
      )}
    </MeetingProvider>
  );
};

export default Livestream;
