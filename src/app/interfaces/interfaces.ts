export interface RespuestaTopHeadlines {
  status: string;
  totalResults: number;
  posts: Article[];
  post: Articles[];
  posh: Horas[];
  comments: Comentarios[];
  result: Usuario[];
  categories: Categoria[];
  pedido: Pedidos[];
}

 export interface Article {
//  source: Source;
  author?: string;
  news_title?: string;
  news_description?: string;
  news_image?: string;
  nid?: number;
  cdi?: string;
  cant?: string;
  video_url?: string;
  amount?: number;
  amounta?: number;
  amountb?: number;
  amountc?: number;
  amountd?: number;
  amounte?: number;
  amountf?: number;
  amountg?: number;
  amounth?: number;
  amounti?: number;
  amountj?: number;
  adicionprice0?: number;
  adicionprice1?: number;
  adicionprice2?: number;
  adicionprice3?: number;
  adicionprice4?: number;
  adicionprice5?: number;
  adicionprice6?: number;
  adicionprice7?: number;
  adicionprice8?: number;
  adicionprice9?: number;
  tienda_price?: number;
  p?: number;
//  publishedAt: string;
}

export interface Pedidos {
//  source: Source;
 Tarjeta?: string;
 Transferencia?: string;
 Efectivo?: string;
 Recoger?: string;
 Domicilio?: string;
}

export interface Comentarios {
//  source: Source;
 author?: string;
 content?: string;


//  publishedAt: string;
}

export interface Categoria {
//  source: Source;
 cid?: string;
 category_name?: string;
category_image: string;

//  publishedAt: string;
}


export interface Articles {
//  source: Source;
 author?: string;
 news_title?: string;
 news_description?: string;
 news_image?: string;
 nid?: number;
 amount?: number;
 video_url?: string;
 price?: number;
 tienda_price?: number;

//  publishedAt: string;
}

export interface Horas {
//  source: Source;
 entrada?: number;
 salida?: number;

//  publishedAt: string;
}

export interface Usuario {
  address?: string;
  addressdos?: string;
  _id?: string;
  nombre?: string;
  email?: string;
  password?: string;
  length?: string;
  pop?: string;
  push?: string;
  concat?: string;
}

export interface Source {

  nid?: string;
  name: string;

}
