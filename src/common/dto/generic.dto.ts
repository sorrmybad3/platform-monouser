export interface CompanyLevelDto {
  companyId: string;
}

export interface ShopLevelDto extends CompanyLevelDto {
  shopId: string;
}
