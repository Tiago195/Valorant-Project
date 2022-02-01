export default async function requestCharacters() {
  const response = await (await fetch('https://valorant-api.com/v1/agents?language=pt-BR&&isPlayableCharacter=true')).json()
  return response
}