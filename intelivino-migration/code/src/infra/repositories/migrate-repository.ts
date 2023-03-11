import { faker } from '@faker-js/faker'
import {
  activities_business,
  business,
  campaigns_indicacoes,
  coupon_couponUse_type,
  indicacoes,
  indicacoes_uvas,
  pedidos,
  pedidos_indicacoes,
  PrismaClient,
  users,
} from '@prisma/client'
import {
  Account,
  GenderType,
  PersonType,
  Item,
  PrismaClient as PrismaClientDbProd,
} from '../database_api/orm/prisma/client'
import { slugGenerator } from '../utils/slug_generator'
import { cleanString } from '../utils/string'

interface GrapeCreateDto {
  name: string
}

export class MigrateRepository {
  prismaDbOlder: PrismaClient
  prismaDbProd: PrismaClientDbProd
  constructor() {
    this.prismaDbOlder = new PrismaClient()
    this.prismaDbProd = new PrismaClientDbProd()
  }

  async initialMigrate() {
    try {
      await this.migrateGrapes()
      await this.migrateCountry()
      await this.migratePlans()
      await this.migrateActivities()
      await this.migrateDeliveries()
      await this.migrateWinery()
      await this.migrateWineType()
      await this.migrateLabelType()
      await this.migrateTypeCampaigns()
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateActivities() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      await this.prismaDbProd.activities.deleteMany({})
      do {
        itemsPaginated = 0
        const activities = await this.prismaDbOlder.activities.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        for (const activity of activities) {
          await this.prismaDbProd.activities.create({
            data: {
              name: activity.nome,
              slug: slugGenerator(cleanString(activity.nome)),
              external_id: activity.id,
            },
          })
        }
        itemsPaginated = activities.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateWinery() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      await this.prismaDbProd.winery.deleteMany({})
      do {
        itemsPaginated = 0
        const wineries = await this.prismaDbOlder.vinicolas.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        for (const winery of wineries) {
          if (winery.nome.length > 200) {
            continue
          }
          await this.prismaDbProd.winery.create({
            data: {
              name: winery.nome,
              external_id: winery.id,
            },
          })
        }
        itemsPaginated = wineries.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateWineType() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      await this.prismaDbProd.wineType.deleteMany({})
      do {
        itemsPaginated = 0
        const wineTypes = await this.prismaDbOlder.meta_tipos_vinhos.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        for (const type of wineTypes) {
          await this.prismaDbProd.wineType.create({
            data: {
              name: type.descricao,
              slug: slugGenerator(cleanString(type.descricao)),
              external_id: type.id,
            },
          })
        }
        itemsPaginated = wineTypes.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateLabelType() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      await this.prismaDbProd.itemType.deleteMany({})
      await this.prismaDbProd.tag.deleteMany({})
      do {
        itemsPaginated = 0
        const labelTypes = await this.prismaDbOlder.tipos_indicacoes.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        for (const type of labelTypes) {
          if (type.id === 3 || type.id === 4) {
            await this.prismaDbProd.itemType.create({
              data: {
                name: type.nome,
                external_id: type.id,
              },
            })
          } else {
            await this.prismaDbProd.tag.create({
              data: {
                name: type.nome,
                description: cleanString(type.nome),
                external_id: type.id,
              },
            })
          }
        }
        itemsPaginated = labelTypes.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateDeliveries() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      await this.prismaDbProd.delivery.deleteMany({})
      await this.prismaDbProd.accountDelivery.deleteMany({})
      do {
        itemsPaginated = 0
        const deliveries = await this.prismaDbOlder.deliveries.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        for (const delivery of deliveries) {
          await this.prismaDbProd.delivery.create({
            data: {
              name: delivery.nome,
              slug: slugGenerator(cleanString(delivery.nome)),
              external_id: delivery.id,
            },
          })
        }
        itemsPaginated = deliveries.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateGrapes() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      await this.prismaDbProd.grape.deleteMany({})
      do {
        itemsPaginated = 0
        const grapesOlder = await this.prismaDbOlder.uvas.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        for (const grape of grapesOlder) {
          await this.prismaDbProd.grape.create({
            data: {
              name: grape.nome,
              external_id: grape.id,
            },
          })
        }
        itemsPaginated = grapesOlder.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateCountry() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      await this.prismaDbProd.country.deleteMany({})
      await this.prismaDbProd.state.deleteMany({})
      await this.prismaDbProd.city.deleteMany({})
      await this.prismaDbProd.region.deleteMany({})
      do {
        itemsPaginated = 0
        const countries = await this.prismaDbOlder.meta_paises.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        for (const country of countries) {
          const states = await this.prismaDbOlder.meta_estados.findMany({
            where: {
              pais_id: country.id,
            },
          })
          const responseCreateCountry = await this.prismaDbProd.country.create({
            data: {
              external_id: country.id,
              name: country.descricao || '',
              slug: slugGenerator(cleanString(country.descricao!)),
              value: country.valor,
              states: {
                create: states.map((state) => ({
                  name: state.descricao,
                  external_id: state.id,
                  slug: slugGenerator(cleanString(state.descricao)),
                })),
              },
            },
            include: {
              states: true,
            },
          })

          for (const state of states) {
            const stateCreated = responseCreateCountry.states.find(
              (item) => item.external_id === state.id
            )
            const cities = await this.prismaDbOlder.meta_municipios.findMany({
              where: {
                estado_id: state.id,
              },
            })
            for (const city of cities) {
              await this.prismaDbProd.city.create({
                data: {
                  external_id: city.id,
                  name: city.descricao,
                  slug: slugGenerator(cleanString(city.descricao)),
                  state_id: stateCreated?.id || '',
                },
              })
            }
            const regions =
              await this.prismaDbOlder.meta_regioes_business.findMany({
                where: {
                  meta_estado_id: state.id,
                  meta_pais_id: country.id,
                },
              })
            for (const region of regions) {
              await this.prismaDbProd.region.create({
                data: {
                  external_id: region.id,
                  name: region.descricao,
                  slug: slugGenerator(cleanString(region.descricao)),
                  state_id: stateCreated?.id || '',
                },
              })
            }
          }
        }
        itemsPaginated = countries.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migratePlans() {
    try {
      await this.prismaDbProd.plan.deleteMany()
      await this.prismaDbProd.paymentCycle.deleteMany()
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      do {
        itemsPaginated = 0
        const plans = await this.prismaDbOlder.planos.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        if (!plans) {
          throw new Error('none plans')
        }
        const paymentCycle = await this.prismaDbProd.paymentCycle.create({
          data: {
            name: 'Mensal',
            slug: 'mensal',
          },
        })
        for (const plan of plans) {
          await this.prismaDbProd.plan.create({
            data: {
              name: plan.nome!,
              external_id: plan.id,
              slug: slugGenerator(plan.nome!),
              description: plan.descricao!,
              max_labels: plan.max_rotulos!,
              max_users: plan.max_users!,
              price: Number(plan.valor_plano!),
              payment_cycle_id: paymentCycle.id,
            },
          })
        }
        itemsPaginated = plans.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateTypeCampaigns() {
    try {
      await this.prismaDbProd.campaignType.deleteMany()
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      do {
        itemsPaginated = 0
        const campaignTypes = await this.prismaDbOlder.campaigns_types.findMany(
          {
            take: perPage,
            skip: this.calculatePage(page, perPage),
          }
        )
        if (!campaignTypes) {
          throw new Error('none plans')
        }
        for (const campaign of campaignTypes) {
          await this.prismaDbProd.campaignType.create({
            data: {
              name: campaign.descricao,
              slug: slugGenerator(cleanString(campaign.descricao)),
              external_id: campaign.id,
            },
          })
        }
        itemsPaginated = campaignTypes.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateAccountsAndBusinessUsers(accountIds?: number[]) {
    let page = 1
    const perPage = 50
    let itemsPaginated = 0
    await this.prismaDbProd.account.deleteMany({})
    await this.prismaDbProd.user.deleteMany({})
    await this.prismaDbProd.accountUser.deleteMany({})
    await this.prismaDbProd.item.deleteMany({})
    await this.prismaDbProd.campaign.deleteMany({})
    await this.prismaDbProd.order.deleteMany({})
    do {
      itemsPaginated = 0
      const accounts = accountIds
        ? await this.getAccountsPerId(accountIds)
        : await this.getAccounts(page, perPage)
      for (const account of accounts) {
        const responseCreateAccount = await this.createAccount(account)
        await this.migrateCoupons(responseCreateAccount)
        await this.migrateCampaigns(account.user_id!, responseCreateAccount)
        await this.createAccountActivities(account, responseCreateAccount)
        await this.createAccountUser(account, responseCreateAccount)
        await this.createAccountSeller(account.user_id!)
        await this.createAccountDeliveries(account, responseCreateAccount)
      }
      for (const account of accounts) {
        await this.migrateLabels(account)
      }
      for (const account of accounts) {
        await this.migrateOrders(account.user_id!)
      }
      itemsPaginated = accounts.length
      page++
    } while (itemsPaginated === perPage)
  }

  async migrateCoupons(account: Account) {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      do {
        itemsPaginated = 0
        const couponsDb = await this.prismaDbOlder.coupon.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
          where: {
            user_id: account.external_id!,
          },
        })
        for (const item of couponsDb) {
          console.log({ coupon: item })
          await this.prismaDbProd.coupon.create({
            data: {
              code: item.code,
              couponUse_type: item.couponUse_type,
              dicount_type: item.discount_type,
              discount_value: item.discount_value,
              account_id: account.id,
              external_id: item.id,
              expiration_date: item.expiration_date,
              inital_date: item.initial_date,
              max_value: item.max_value,
              min_value: item.min_value,
            },
          })
        }
        itemsPaginated = couponsDb.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async getRole(roleName: string) {
    try {
      return await this.prismaDbProd.role.findUnique({
        where: {
          name: roleName,
        },
      })
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async getAccounts(page: number, perPage?: number) {
    return await this.prismaDbOlder.business.findMany({
      include: {
        users: true,
        activities_business: true,
      },
      where: {
        user_id: {
          not: null,
        },
        users: {
          plano_id: {
            not: null,
            notIn: [1],
          },
        },
        status: {
          equals: true,
        },
      },
      take: perPage,
      skip: this.calculatePage(page, perPage || 10),
    })
  }

  async getAccountsPerId(accountIds: number[]) {
    return await this.prismaDbOlder.business.findMany({
      include: {
        users: true,
        activities_business: true,
      },
      where: {
        user_id: {
          not: null,
        },
        users: {
          plano_id: {
            not: null,
            notIn: [1],
          },
        },
        status: {
          equals: true,
        },
        id: {
          in: accountIds,
        },
      },
    })
  }

  getAccountCpfAndPersonType(
    account: business & {
      activities_business: activities_business[]
      users: users | null
    }
  ) {
    let personType = '' as PersonType
    let cpfCnpj = null
    if (account.person_type === 'cnpj') {
      personType = 'J'
      cpfCnpj = account.cnpj
    } else {
      personType = 'F'
      cpfCnpj = account.cpf
    }
    return {
      cpfCnpj,
      personType,
    }
  }

  async createAccount(
    account: business & {
      activities_business: activities_business[]
      users: users | null
    }
  ) {
    const { personType } = this.getAccountCpfAndPersonType(account)
    let accountPlan = null
    if (account.users?.plano_id) {
      accountPlan = await this.prismaDbProd.plan.findFirst({
        where: {
          external_id: account.users?.plano_id,
        },
      })
    }
    return await this.prismaDbProd.account.create({
      data: {
        external_id: account.user_id!,
        name: account.main_contact_name || '',
        city: account.users?.city || '',
        district: account.users?.address_neighborhood || '',
        street: account.users?.address_street || '',
        number: account.users?.address_number || '',
        state: account.users?.state || '',
        zipcode: account.users?.address_cep || '',
        complement: account.users?.address_complement || '',
        domain:
          account.users?.name_business_slug || faker.internet.domainName(),
        email: account.users?.email || '',
        market_name: account.users?.name_business || '',
        phone: account.main_contact_fone,
        gender: 'ND',
        person_type: personType,
        cpf_cnpj: account.person_type === 'cpf' ? account.cpf : account.cnpj,
        site: account.website,
        social_reason: account.razao_social,
        logo: account.logotipo_url,
        whatsapp: account.whatsapp,
        isActive: account.status ? account.status : false,
        facebook_url: account.facebook_url,
        instagram_url: account.instagram_url,
        plan_id: accountPlan ? accountPlan.id : null,
        account_configuration: {
          create: {
            header_color: account.cor_texto_cabecalho,
            banner_market_url: account.banner_catalogo_url,
          },
        },
      },
    })
  }

  async createAccountActivities(
    account: business & {
      activities_business: activities_business[]
      users: users | null
    },
    newAccount: Account
  ) {
    for (const activity of account.activities_business) {
      const newActivity = await this.prismaDbProd.activities.findUnique({
        where: {
          external_id: activity.activity_id!,
        },
      })
      await this.prismaDbProd.accountActivities.create({
        data: {
          account_id: newAccount.id,
          activities_id: newActivity?.id || '',
        },
      })
    }
  }

  async createAccountDeliveries(
    account: business & {
      activities_business: activities_business[]
      users: users | null
    },
    newAccount: Account
  ) {
    const deliveries = await this.prismaDbOlder.deliveries_business.findMany({
      where: {
        business_id: account.id,
        AND: {
          business_id: {
            not: null,
          },
        },
      },
    })
    for (const delivery of deliveries) {
      const newDelivery = await this.prismaDbProd.delivery.findUnique({
        where: {
          external_id: delivery.delivery_id!,
        },
      })
      await this.prismaDbProd.accountDelivery.create({
        data: {
          account_id: newAccount.id,
          delivery_id: newDelivery?.id || '',
        },
      })
    }
  }

  async getDevicesAccount(accountId: number) {
    const device = await this.prismaDbOlder.devices.findFirst({
      where: {
        user_id: accountId,
        token_notification: {
          not: '',
        },
      },
    })

    return device
  }

  async createAccountUser(
    account: business & {
      activities_business: activities_business[]
      users: users | null
    },
    accountCreated: Account
  ) {
    const roleBusiness = await this.getRole('Business')
    const device = await this.getDevicesAccount(account.id)
    const { cpfCnpj } = this.getAccountCpfAndPersonType(account)
    if (!roleBusiness) {
      throw new Error('Business role not found')
    }
    const user = await this.prismaDbProd.user.create({
      data: {
        account_user: {
          create: {
            account_id: accountCreated.id,
            role_id: roleBusiness.id,
          },
        },
        name: account.users?.name || '',
        email: account.users?.email || '',
        phone: account.fone,
        user_addresses: {
          create: {
            city: account.users?.city || '',
            state: account.users?.state || '',
            complement: account.users?.address_complement,
            number: account.users?.address_number || '',
            district: account.users?.address_neighborhood || '',
            street: account.users?.address_street || '',
            zip_code: account.users?.address_cep || '',
            additional_information: account.users?.address_complement || '',
            name: null,
          },
        },
        password: account.users?.password || '',
        apple_id: account.users?.apple,
        facebook_id: account.users?.facebook,
        birthdate: account.users?.birthday || new Date(),
        gender: 'ND' as GenderType,
        cpf_cnpj: cpfCnpj,
        google_id: account.users?.google,
        photo: account.users?.photo,
        whatsapp: account.whatsapp,
        rd_station_id: account.users?.rdstation_id,
        rd_station_sync: account.users?.rdstation_sync === null ? false : true,
      },
    })

    if (device) {
      await this.prismaDbProd.device.create({
        data: {
          device_physical_id: device.installation_id,
          platform: device.platform === 'ios' ? 'ios' : 'android',
          token_notification: device.token_notification,
          version: device.version!,
          external_id: device.id,
          user_id: user.id,
        },
      })
    }
    return user
  }

  async createAccountSeller(accountId: number) {
    const roleSeller = await this.getRole('Seller')
    if (!roleSeller) {
      throw new Error('Seller role not found')
    }
    const newAccountAlreadyExists = await this.prismaDbProd.account.findUnique({
      where: {
        external_id: accountId,
      },
    })
    if (!newAccountAlreadyExists) {
      throw new Error('Account not found')
    }
    const accountSeller = await this.prismaDbOlder.business.findMany({
      where: {
        user_id_parent: accountId,
      },
      include: {
        users: true,
      },
    })
    if (!accountSeller) {
      throw new Error('Account not found')
    }
    for (const account of accountSeller) {
      await this.prismaDbProd.user.create({
        data: {
          account_user: {
            create: {
              account_id: newAccountAlreadyExists.id,
              role_id: roleSeller.id,
            },
          },
          name: account.users?.name || '',
          email: account.users?.email || '',
          phone: account.fone,
          user_addresses: {
            create: {
              city: account.users?.city || '',
              state: account.users?.state || '',
              complement: account.users?.address_complement,
              number: account.users?.address_number || '',
              district: account.users?.address_neighborhood || '',
              street: account.users?.address_street || '',
              zip_code: account.users?.address_cep || '',
              name: null,
              additional_information: account.users?.address_complement || '',
            },
          },
          password: account.users?.password || '',
          apple_id: account.users?.apple,
          facebook_id: account.users?.facebook,
          birthdate: account.users?.birthday || new Date(),
          gender: 'ND' as GenderType,
          cpf_cnpj: account.person_type === 'cpf' ? account.cpf : account.cnpj,
          google_id: account.users?.google,
          photo: account.users?.photo,
          whatsapp: account.whatsapp,
          rd_station_id: account.users?.rdstation_id,
          rd_station_sync: account.users?.rdstation_sync,
        },
      })
    }
  }

  async migrateCampaigns(accountId: number, newAccount: Account) {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      do {
        itemsPaginated = 0
        const campaigns = await this.prismaDbOlder.campaigns.findMany({
          include: {
            campaigns_indicacoes: true,
            campaigns_types: true,
          },
          take: perPage,
          skip: this.calculatePage(page, perPage),
          where: {
            user_id: accountId,
            OR: {
              user_id_parent: accountId,
            },
          },
        })
        for (const campaign of campaigns) {
          console.log({ campaign })
          const campaignType = await this.prismaDbProd.campaignType.findUnique({
            where: {
              external_id: campaign.type!,
            },
          })
          await this.prismaDbProd.campaign.create({
            data: {
              name: campaign.name!,
              external_id: campaign.id,
              description: campaign.description,
              account_id: newAccount.id,
              expiration_date: campaign.type === 1 ? campaign.date_end : null,
              start_date: campaign.type === 1 ? campaign.date_start : null,
              discount_type: 'PERCENTAGE',
              discount_value: Number(campaign.discount),
              campaign_type_id: campaignType?.id!,
            },
          })
        }
        itemsPaginated = campaigns.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateOrders(accountId: number) {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      do {
        itemsPaginated = 0
        const orders = await this.prismaDbOlder.pedidos.findMany({
          include: {
            pedidos_indicacoes: true,
            coupon: true,
          },
          where: {
            user_id: accountId,
          },
        })
        const newAccount = await this.prismaDbProd.account.findUnique({
          where: {
            external_id: accountId,
          },
        })
        if (!newAccount) {
          throw new Error('account not found')
        }
        for (const order of orders) {
          console.log({ order })
          let orderTotal = 0
          for (const item of order.pedidos_indicacoes) {
            orderTotal += Number(item.total)
          }
          const customerCreated = await this.createOrderCustomer(order)
          const orderStatusFinished =
            await this.prismaDbProd.orderStatus.findUnique({
              where: {
                name: 'Finalizado',
              },
            })
          if (!orderStatusFinished) {
            throw new Error('order status not found')
          }
          let orderCoupon = null
          let orderCampaign = null
          if (order.coupon_id) {
            const coupon = await this.prismaDbProd.coupon.findUnique({
              where: {
                external_id: order.coupon_id,
              },
            })
            orderCoupon = coupon?.id
          }
          if (order.campaign_id) {
            const campaign = await this.prismaDbProd.campaign.findUnique({
              where: {
                external_id: order.campaign_id,
              },
            })
            orderCampaign = campaign?.id
          }
          const orderCreated = await this.prismaDbProd.order.create({
            data: {
              code: `${order.id}`,
              total: orderTotal,
              account_id: newAccount.id,
              customer_id: customerCreated.id,
              external_id: order.id,
              is_read: order.status,
              order_status_id: orderStatusFinished.id,
              customer_address_id: customerCreated.customer_address[0].id,
              discoun_type: order.discount_type,
              discount: Number(order.discount),
              coupon_id: orderCoupon,
              campaign_id: orderCampaign,
              userId: customerCreated.user_id,
            },
          })
          for (const orderLabel of order.pedidos_indicacoes) {
            const label = await this.prismaDbProd.item.findUnique({
              where: {
                external_id: orderLabel.id,
              },
            })
            if (!label) {
              continue
            }
            await this.prismaDbProd.orderItem.create({
              data: {
                order_id: orderCreated.id,
                item_id: label.id,
                price: Number(orderLabel.valor),
                quantity: orderLabel.qtd!,
              },
            })
          }
        }
        itemsPaginated = orders.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async createOrderCustomer(
    order: pedidos & {
      pedidos_indicacoes: pedidos_indicacoes[]
    }
  ) {
    if (!order.email) {
      throw new Error('email not found')
    }
    const account = await this.prismaDbProd.account.findUnique({
      where: {
        external_id: order.user_id!,
      },
    })
    if (!account) {
      throw new Error('account not found')
    }
    const customerAlreadyExists = await this.prismaDbProd.customer.findUnique({
      where: {
        email_account_id_mobile_phone: {
          account_id: account.id,
          email: order.email,
          mobile_phone: order.telefone_celular!,
        },
      },
      include: {
        customer_address: true,
      },
    })
    if (customerAlreadyExists) {
      return customerAlreadyExists
    }
    return await this.prismaDbProd.customer.create({
      data: {
        name: order.nome,
        email: order.email,
        mobile_phone: order.telefone_celular!,
        customer_address: {
          create: {
            address_city: order.cidade || '',
            address_state: order.estado || '',
            address_zip_code: order.cep || '',
            address_complement: order.complemento,
            address_number: order.numero || '',
            address_district: order.bairro || '',
            address_street: order.endereco || '',
            address_name: null,
          },
        },
        converted: true,
        account_id: account.id,
        origin_registration: 'ORDER',
        note: order.obs_gerais || '',
        phone: order.telefone_celular!,
      },
      include: {
        customer_address: true,
      },
    })
  }

  async migrateLabels(
    account: business & {
      activities_business: activities_business[]
      users: users | null
    }
  ) {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      do {
        itemsPaginated = 0
        const labels = await this.prismaDbOlder.indicacoes.findMany({
          include: {
            campaigns_indicacoes: true,
            indicacoes_uvas: true,
          },
          where: {
            user_id: account.user_id,
          },
        })
        const newAccount = await this.prismaDbProd.account.findUnique({
          where: {
            external_id: account.user_id!,
          },
        })
        if (!newAccount) {
          throw new Error('User not found')
        }
        for (const label of labels) {
          const photoUrl = await this.prismaDbOlder.$queryRaw<
            { photo_url: string }[]
          >`select p.photo_url  from photos p
          inner join albums a on a.id = p.album_id
          inner join indicacoes i on i.id = a.type_id
          where i.id = ${label.id}`
          const labelCountry = label.meta_pais_id
            ? await this.getLabelCountry(label.meta_pais_id!)
            : null
          const labelRegion = label.meta_regiao_id
            ? await this.getLabelRegion(label.meta_regiao_id!)
            : null
          const labelWinery = label.vinicola_id
            ? await this.getLabelWinery(label.vinicola_id)
            : null
          const labelWineType = label.meta_tipo_vinho_id
            ? await this.getLabelWineType(label.meta_tipo_vinho_id)
            : null
          const labelType = await this.getLabelType(label.tipo_indicacao_id!)
          console.log(photoUrl)
          const responseCreateLabels = await this.prismaDbProd.item.create({
            data: {
              name: label.nome || '',
              price: Number(label.preco),
              account_id: newAccount.id,
              promotional_price: Number(label.preco_promocional),
              description: label.descricao,
              alcohol_percentage: label.porcentagem_alcool,
              harvest: label.safra,
              is_active: label.status_indicacao_id === 1 ? true : false,
              photo: photoUrl.length ? photoUrl[0].photo_url : '',
              country_id: labelCountry?.id,
              region_id: labelRegion?.id,
              winery_id: labelWinery?.id,
              wine_type_id: labelWineType?.id,
              type_id: labelType?.id!,
              external_id: label.id,
              no_harvest: label.sem_safra!,
              control_stock: true,
            },
          })
          await this.generateLabelTags(label, responseCreateLabels)
          await this.generateLabelStock(label, responseCreateLabels, newAccount)
          await this.createLabelGrape(label, responseCreateLabels)
          for (const labelCampaign of label.campaigns_indicacoes) {
            if (!labelCampaign.campaign_id) {
              continue
            }
            const campaign = await this.prismaDbProd.campaign.findUnique({
              where: {
                external_id: labelCampaign.campaign_id,
              },
            })
            if (!campaign) {
              continue
            }
            await this.prismaDbProd.campaignItem.create({
              data: {
                campaign_id: campaign.id,
                item_id: responseCreateLabels.id,
              },
            })
          }
        }
        itemsPaginated = labels.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async createLabelGrape(
    label: indicacoes & {
      campaigns_indicacoes: campaigns_indicacoes[]
      indicacoes_uvas: indicacoes_uvas[]
    },
    newLabel: Item
  ) {
    for (const grape of label.indicacoes_uvas) {
      const grapeLabel = await this.prismaDbProd.grape.findUnique({
        where: {
          external_id: grape.uva_id!,
        },
      })
      await this.prismaDbProd.itemGrape.create({
        data: {
          item_id: newLabel.id,
          grape_id: grapeLabel?.id || '',
        },
      })
    }
  }

  async generateLabelTags(
    label: indicacoes & {
      campaigns_indicacoes: campaigns_indicacoes[]
      indicacoes_uvas: indicacoes_uvas[]
    },
    newLabel: Item
  ) {
    if (label.tipo_indicacao_id === 1 || label.tipo_indicacao_id === 2) {
      const tag = await this.prismaDbProd.tag.findUnique({
        where: {
          external_id: label.tipo_indicacao_id,
        },
      })
      console.log({ tag })
      await this.prismaDbProd.itemTag.create({
        data: {
          tag_id: tag!.id,
          item_id: newLabel.id,
        },
      })
    }
  }

  async generateLabelStock(
    label: indicacoes & {
      campaigns_indicacoes: campaigns_indicacoes[]
      indicacoes_uvas: indicacoes_uvas[]
    },
    newLabel: Item,
    newAccount: Account
  ) {
    if (label.estoque && label.estoque > 0) {
      await this.prismaDbProd.stockItem.create({
        data: {
          item_id: newLabel.id,
          account_id: newAccount.id,
          quantity: label.estoque,
        },
      })
      await this.prismaDbProd.stockHistory.create({
        data: {
          item_id: newLabel.id,
          date: new Date(),
          quantity: label.estoque,
          reason: 'insert',
          operation: 'INPUT',
        },
      })
    }
  }

  async getLabelCountry(countryId: number) {
    return await this.prismaDbProd.country.findUnique({
      where: {
        external_id: countryId,
      },
    })
  }

  async getLabelWineType(wineTypeId: number) {
    return await this.prismaDbProd.wineType.findUnique({
      where: {
        external_id: wineTypeId,
      },
    })
  }

  async getLabelType(labelType: number) {
    return await this.prismaDbProd.itemType.findUnique({
      where: {
        external_id: labelType === 1 || labelType === 2 ? 3 : labelType,
      },
    })
  }

  async getLabelWinery(wineryId: number) {
    return await this.prismaDbProd.winery.findUnique({
      where: {
        external_id: wineryId,
      },
    })
  }

  async getLabelRegion(regionId: number) {
    return await this.prismaDbProd.region.findUnique({
      where: {
        external_id: regionId,
      },
    })
  }

  async migrateSellers() {}
  calculatePage(offset: number, limit: number): number {
    return (offset - 1) * limit
  }
}
