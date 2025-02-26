export interface Gift {
  id: string;
  name: string;
  recipient: string;
  occasion: string;
  price: number;
  priceHistory: Array<{date: string; price: number}>;
  imageUrl?: string;
  notes?: string;
  purchased: boolean;
  category: string;
}

export interface GiftList {
  id: string;
  name: string;
  occasion: string;
  date: string;
  budget: number;
  gifts: Gift[];
}