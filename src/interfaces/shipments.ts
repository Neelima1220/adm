export interface Ishipment {
  id: string;
  name: string;
  email: string;
  boxes?: string;
}

export interface IInitialState {
  data: Ishipment[];
  isLoading: boolean;
  filteredData: Ishipment[];
  shipment: Ishipment;
  searchValue: string;
  cargoBaysCount: number;
  cargoInput: string;
  error: string;
}
