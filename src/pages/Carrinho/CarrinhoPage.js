import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import React, { Children } from "react";

export const CarrinhoPage = () => {
    return (
        <section className="h-100 h-custom">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                            Meu carrinho
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            Itens
                          </MDBTypography>
                        </div>
      
                        <hr className="my-4" />
      
                        <MDBRow id="produto0" className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src="https://i.pinimg.com/564x/87/2b/fa/872bfa9a04477ec618c458cba36d37fd.jpg"
                              fluid className="rounded-3" alt="Cotton T-shirt" />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-black">
                              Patins Blue
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-muted mb-0">
                              Tamanho: 37/38
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="minus" onClick="" />
                            </MDBBtn>
      
                            <MDBInput type="number" min="0" defaultValue={1} size="sm" id="quantidade0" />
      
                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="plus" onClick=""/>
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                            <b>R$750,00</b>
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a href="#!" className="text-muted">
                              <MDBIcon fas icon="times" />
                            </a>
                          </MDBCol>
                        </MDBRow>
      
     
                        <hr className="my-4" />
      
                        <MDBRow id="produto1" className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src="https://i.pinimg.com/564x/fd/e8/1c/fde81c8528cd311a1a073adfd7856917.jpg"
                              fluid className="rounded-3" alt="Cotton T-shirt" />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-black">
                              Patins Rosita
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-muted mb-0">
                              Tamanho: 37/38
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="minus" onClick="removerItem(1)" />
                            </MDBBtn>
      
                            <MDBInput type="number" min="0" defaultValue={1} size="sm" id="quantidade1"  />
      
                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="plus" onClick="" />
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                            <b>R$650,00</b> 
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a href="#!" className="text-muted">
                              <MDBIcon fas icon="times" />
                            </a>
                          </MDBCol>
                        </MDBRow>
      
                        <hr className="my-4" />
      
                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <MDBCardText tag="a" href="/" className="text-body">
                              <MDBIcon fas icon="long-arrow-alt-left me-2" /> Voltar para a loja
                            </MDBCardText>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                          Resumo da compra
                        </MDBTypography>
      
                        <hr className="my-4" />
      
      
                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Entrega
                        </MDBTypography>
      
                        <div className="mb-4 pb-2">
                          <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                            <option value="1">Entrega rápida</option>
                            <option value="2">Correios</option>
                            <option value="3">Retirar na loja</option>

                           </select>
                        </div>
      
                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Código de desconto
                        </MDBTypography>
      
                        <div className="mb-5">
                          <MDBInput size="lg" label="Digite o código" />
                        </div>
      
                        <hr className="my-4" />
      
                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            TOTAL
                          </MDBTypography>
                          <MDBTypography tag="h5">R$ 1.400,00</MDBTypography>
                        </div>
      
                        <MDBBtn color="info" block size="lg">
                          Finalizar compra
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
    }