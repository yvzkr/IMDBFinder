export interface ApiResponse {
  Response: 'True' | 'False'; // If the response is successful
  Error?: string; // If the response is not successful
}
