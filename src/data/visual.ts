import type { Mask, Costume } from '../types'

export const masks: Mask[] = [
  { name: '红脸', color: '#C41E3A', meaning: '忠勇、正直、侠义', example: '如关羽等忠义人物' },
  { name: '黑脸', color: '#1A1A1A', meaning: '刚正不阿、勇猛无私', example: '如包拯等刚直人物' },
  { name: '白脸', color: '#F0EAE0', meaning: '奸诈、多疑、阴险', example: '如曹操等奸雄人物' },
  { name: '蓝脸', color: '#1E5AA8', meaning: '骁勇刚强、草莽英雄', example: '如窦尔敦等豪杰' },
  { name: '绿脸', color: '#2E7D32', meaning: '勇猛顽强、绿林好汉', example: '多用于江湖草莽人物' },
  { name: '金脸', color: '#C9A227', meaning: '神佛、精怪、神圣威严', example: '多用于神仙鬼怪角色' },
]

export const costumes: Costume[] = [
  { name: '凤冠', category: '头饰', description: '皇后、贵妇所戴，缀以珠翠凤凰，象征尊贵身份。' },
  { name: '头面', category: '头饰', description: '旦角头部珠翠饰品，按角色身份有不同款式与规格。' },
  { name: '盔头', category: '头饰', description: '武将所戴头盔，缀以绒球、珠须，衬托英武之气。' },
  { name: '蟒袍', category: '服饰', description: '帝王将相所穿官服，绣有蟒纹，分颜色表身份等级。' },
  { name: '靠', category: '服饰', description: '武将铠甲，背插靠旗，穿戴后更显威风凛凛。' },
  { name: '褶子', category: '服饰', description: '便服，多为书生、百姓所穿，是常见的日常戏装。' },
  { name: '帔', category: '服饰', description: '对襟长袍，官宦、贵妇的便服，雍容典雅。' },
  { name: '水袖', category: '服饰', description: '袖口接出的一段白绸，是旦角等行当传情达意的重要手段。' },
]
