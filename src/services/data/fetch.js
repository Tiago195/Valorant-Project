export async function requestCharacters() {
  const response = await (await fetch('https://valorant-api.com/v1/agents?language=pt-BR&&isPlayableCharacter=true')).json()
  return response
}

export async function requestWeapons() {
  const response = await (await fetch('https://valorant-api.com/v1/weapons?language=pt-BR')).json()
  return response
}

export async function requestWeaponsSkins() {
  const response = await (await fetch('https://valorant-api.com/v1/weapons/skins?language=pt-BR')).json()
  return response
}

export async function requestWeaponsSkinsChromas() {
  const response = await (await fetch('https://valorant-api.com/v1/weapons/skinchromas?language=pt-BR')).json()
  return response
}

export async function requestWeaponsSkinsLevel() {
  const response = await (await fetch('https://valorant-api.com/v1/weapons/skinlevels?language=pt-BR')).json()
  return response
}