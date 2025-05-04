import { supabase } from '../lib/supabase'
import type { Sport } from '../data/sportsData'

export interface Asset {
  id: string
  name: string
  type: 'logo' | 'font' | 'background' | 'stat_icon' | 'number' | 'letter'
  sport: Sport
  team_id?: string
  stat_id?: string
  file_path: string
  created_at: string
}

export interface AssetVersion {
  id: string
  asset_id: string
  style: string
  file_path: string
  created_at: string
}

export const getStatIcon = async (sport: Sport, statId: string): Promise<string> => {
  const { data, error } = await supabase
    .from('assets')
    .select('file_path')
    .eq('type', 'stat_icon')
    .eq('sport', sport)
    .eq('stat_id', statId)
    .single()
  
  if (error) throw error
  return data.file_path
}

export const getTeamAssets = async (sport: Sport, teamId: string): Promise<Asset[]> => {
  const { data, error } = await supabase
    .from('assets')
    .select('*')
    .eq('sport', sport)
    .eq('team_id', teamId)
  
  if (error) throw error
  return data
}

export const getNumberAsset = async (sport: Sport, number: number, style: string = 'default'): Promise<string> => {
  const { data, error } = await supabase
    .from('assets')
    .select('file_path')
    .eq('type', 'number')
    .eq('sport', sport)
    .eq('name', number.toString())
    .single()
  
  if (error) throw error
  return data.file_path
}

export const getLetterAsset = async (sport: Sport, letter: string, style: string = 'default'): Promise<string> => {
  const { data, error } = await supabase
    .from('assets')
    .select('file_path')
    .eq('type', 'letter')
    .eq('sport', sport)
    .eq('name', letter.toUpperCase())
    .single()
  
  if (error) throw error
  return data.file_path
}

export const getAssetUrl = (filePath: string): string => {
  return supabase.storage.from('assets').getPublicUrl(filePath).data.publicUrl
} 