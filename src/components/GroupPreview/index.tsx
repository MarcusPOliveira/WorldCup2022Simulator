import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { api } from '../../services/api';
import { GroupDTO } from '../../dtos/GroupDTO';
import { TeamDTO } from '../../dtos/TeamDTO';
import {
  Container,
  TeamWrapper,
  Flag,
  Team,
} from './styles';

type Props = {
  data: TeamDTO;
}

export function GroupPreview({ data }: Props) {
  const [groups, setGroups] = useState<GroupDTO[]>([]);
  const [teams, setTeams] = useState<TeamDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchGroups() {
      try {
        const response = await api.get("/groups");
        console.log(response.data);
        setGroups(response.data);
      } catch (error) {
        console.log("algo deu errado: ", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGroups();
  }, []);

  return (
    <Container>
      <FlatList
        data={groups}
        keyExtractor={item => String(item.group_id)}
        renderItem={({ item }) => (
          <TeamWrapper>
            {
              item.teams.map(team => (
                <>
                  <Flag />
                  <Team> {team.name} </Team>
                </>
              ))
            }
          </TeamWrapper>
        )}
      />
    </Container>
  );
}
