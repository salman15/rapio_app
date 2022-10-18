import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { navigate } from "../../../../RootNavigation";
import { url } from "../../../consts";
import { TStatus } from "../../../types/Status";
import { styles } from "./styles";

const fetchStatus = async (): Promise<TStatus> => {
  const response = await fetch(`${url}/status`);

  try {
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

const useSession = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [session, setSession] = useState<
    Partial<{
      session_token: string;
      expires: string;
    }>
  >();

  useEffect(() => {
    setIsLoading(true);
    fetchStatus()
      .then((response) => {
        setIsOnline(response.status === "online");
        setSession({
          session_token: response.session_token,
          expires: response.expires,
        });
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.error(e);
      });
  }, []);

  return { isOnline, isLoading, session };
};

const Session = () => {
  const { isOnline, isLoading, session } = useSession();

  useEffect(() => {
    if (isLoading) navigate("Establishments");
  }, [isLoading]);

  if (isLoading)
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <Text>
      Checking Session: {String(isOnline)}, {session?.session_token}
    </Text>
  );
};

export default Session;
