var apiconfig = {
    development: {
        serverKey: 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC15Neh5y7tGXHtUHnWpYBlzeu1QE14h68Lio/T94wIpvAwlItBU1Me3QOfDjHWllB19V02CTYEiezQmiMzCTv3udWrArS040zf75Mdscmiiv4NU0Gq/w0XNxkNcGq3JRsMIr9b1DO5kTRTGv4cu6Cwgo3O4NHrIXJeDvvVsjx4YD5r2zYFOogbEsD3aOCeUawuIr81gSnpc10cUgqLLzjfePtVUdRSsrCz9CyHvtjk4O+a2/mWmL1ujqtSLR1lflslLdNYO88Ow6pLsiDBi8PgL4BNjnuZSaP7ZXapo/ifygUFQM2ApUm8QJRNd0reYxaA6/uKVB4zTO1fefDvD6p1AgMBAAECggEAHaiIuG93qVVizC05EJS/0Nm4uz8W4rZNBna7aPaOMML3mxQ9eJNblEa5Vm/8FF9CE1nErxDla+wJXyIi5yl0S7pTaqTwTiZZ3JG1zTu2Avji381ZgcZAni5vuU9BN0enl1z7EsARBwr0GzDlik3Vr7I56SejUtGLUmbjDT8YuQ/B66UV/M4Tdt3w18OBa7tq35cIxmxKqV7nWlcO1U1hNjAdceYhlaV4cYW7+m3q6tXZQ2KrV43PdKrCM+o6+Pf5RfXyjXtQ8z/fwkFxFSIggscfq55+Z3aeilUW+aZUDXMvz8N20ENDevLanVR8K/3Ryirp83MW/ErfnvxN2q1BwQKBgQDh+/G+235Xxk0aFIj3/ZNYbYi76OPtWpRfBDc+KXwoB5qb342n/IGYxDuak7INrl5Zc2VHgOlG+faXC/QYMkeXFcz+qrhLLIvMLqZZATdBnVaKItIGV6KXgIaltaj3tn2kOwe8TP8QYTKaPlVjV7gmNmqA025wdsp6+q8s0/cxeQKBgQDODba7+AwygzbUaSq4flJdQ0+YUntiRhn00S7xExGiUWR9mNlQtUYsUtlazSWg4zf7v5bsfEmrxXdhr5LJzpLZYgwPYpSoYUOhTv2dJIkT/cP3AvbdFdXcHN+lt7jwPiu4EJ/sRGrFHP/Bzf37QT3kvoja6lS7HnKKsGabf/ld3QKBgQCiXzWezfUkuj4R/ClCDnf9dI5nffmvRIMRFmVfC83CsVv8nY8Z4Yt4qZ6t/WtU+zGdkhV2YAC9V8M/Wn5jmFTqEOb/IMlUckhsSCSMFRyPz64riMNhfTw9IUMd873ZZs014Jg5SxWFvmDuhNUzkQampji2IbTbp+7qmA6f5hlZ+QKBgELcrFkeSkbx0Q7n+VbYlr1wpBlXWnYvLSkF3+eWOnijVKp0uL+5ssWbNLCENRuZ34avSrf+NKGqd+yY3lbh00D60dMEOBzTQvDLAvzE6D42cCptKdHfzf+Y1vGdRkOeyOz3aA1wvfysRkmLIEkxiHX7ZckzlL8LSDu8te7rfe15AoGAUBV72ebknkk6zkWoJV9afc7hGrrAPijo9ZsxrlACiNLxFZPx30C4SC+f4IAdY8RCPDfMriekNbqXYCRvYCQD4MYb4yyTNIZXHEwe7HBRFWRm+NE5rFGG3mrnDb9uQ2q86qMeh/PsTCRts1IAAy3Obw30rq7wvJQkNjRjQH4X7Nc=',

    },
    production: {
        serverKey: 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC15Neh5y7tGXHtUHnWpYBlzeu1QE14h68Lio/T94wIpvAwlItBU1Me3QOfDjHWllB19V02CTYEiezQmiMzCTv3udWrArS040zf75Mdscmiiv4NU0Gq/w0XNxkNcGq3JRsMIr9b1DO5kTRTGv4cu6Cwgo3O4NHrIXJeDvvVsjx4YD5r2zYFOogbEsD3aOCeUawuIr81gSnpc10cUgqLLzjfePtVUdRSsrCz9CyHvtjk4O+a2/mWmL1ujqtSLR1lflslLdNYO88Ow6pLsiDBi8PgL4BNjnuZSaP7ZXapo/ifygUFQM2ApUm8QJRNd0reYxaA6/uKVB4zTO1fefDvD6p1AgMBAAECggEAHaiIuG93qVVizC05EJS/0Nm4uz8W4rZNBna7aPaOMML3mxQ9eJNblEa5Vm/8FF9CE1nErxDla+wJXyIi5yl0S7pTaqTwTiZZ3JG1zTu2Avji381ZgcZAni5vuU9BN0enl1z7EsARBwr0GzDlik3Vr7I56SejUtGLUmbjDT8YuQ/B66UV/M4Tdt3w18OBa7tq35cIxmxKqV7nWlcO1U1hNjAdceYhlaV4cYW7+m3q6tXZQ2KrV43PdKrCM+o6+Pf5RfXyjXtQ8z/fwkFxFSIggscfq55+Z3aeilUW+aZUDXMvz8N20ENDevLanVR8K/3Ryirp83MW/ErfnvxN2q1BwQKBgQDh+/G+235Xxk0aFIj3/ZNYbYi76OPtWpRfBDc+KXwoB5qb342n/IGYxDuak7INrl5Zc2VHgOlG+faXC/QYMkeXFcz+qrhLLIvMLqZZATdBnVaKItIGV6KXgIaltaj3tn2kOwe8TP8QYTKaPlVjV7gmNmqA025wdsp6+q8s0/cxeQKBgQDODba7+AwygzbUaSq4flJdQ0+YUntiRhn00S7xExGiUWR9mNlQtUYsUtlazSWg4zf7v5bsfEmrxXdhr5LJzpLZYgwPYpSoYUOhTv2dJIkT/cP3AvbdFdXcHN+lt7jwPiu4EJ/sRGrFHP/Bzf37QT3kvoja6lS7HnKKsGabf/ld3QKBgQCiXzWezfUkuj4R/ClCDnf9dI5nffmvRIMRFmVfC83CsVv8nY8Z4Yt4qZ6t/WtU+zGdkhV2YAC9V8M/Wn5jmFTqEOb/IMlUckhsSCSMFRyPz64riMNhfTw9IUMd873ZZs014Jg5SxWFvmDuhNUzkQampji2IbTbp+7qmA6f5hlZ+QKBgELcrFkeSkbx0Q7n+VbYlr1wpBlXWnYvLSkF3+eWOnijVKp0uL+5ssWbNLCENRuZ34avSrf+NKGqd+yY3lbh00D60dMEOBzTQvDLAvzE6D42cCptKdHfzf+Y1vGdRkOeyOz3aA1wvfysRkmLIEkxiHX7ZckzlL8LSDu8te7rfe15AoGAUBV72ebknkk6zkWoJV9afc7hGrrAPijo9ZsxrlACiNLxFZPx30C4SC+f4IAdY8RCPDfMriekNbqXYCRvYCQD4MYb4yyTNIZXHEwe7HBRFWRm+NE5rFGG3mrnDb9uQ2q86qMeh/PsTCRts1IAAy3Obw30rq7wvJQkNjRjQH4X7Nc=',
    },

};
module.exports = apiconfig;